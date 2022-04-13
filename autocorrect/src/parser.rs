// autocorrect: false
use super::*;

enum ByteType {
    CJK,
    WORD,
    OTHER,
}

pub fn format(input: &str) -> String {
    let mut out = String::new();

    input.bytes().into_iter().map(|byte| {});

    if let Err(e) = pairs {
        return String::from(input);
    }

    let mut pairs = pairs.unwrap();

    let mut prev_pair = None;

    while let pair = pairs.next() {
        if pair.is_none() {
            break;
        }

        let some_pair = pair.clone().unwrap();

        let next_pair = pairs.peek();

        match get_rule(pair.as_ref()) {
            Rule::WORD => {
                // Before
                if is_rule(prev_pair.as_ref(), Rule::CJK) {
                    out.push_str(" ");
                }

                out.push_str(some_pair.as_str());

                // After
                if is_rule(next_pair.as_ref(), Rule::CJK) {
                    out.push_str(" ");
                }
            }
            _ => {
                out.push_str(some_pair.as_str());
            }
        }

        prev_pair = pair;
    }

    String::from(out)
}

fn get_rule(pair: Option<&Pair<Rule>>) -> Rule {
    if pair.is_none() {
        return Rule::EOI;
    }

    pair.unwrap().as_rule()
}

fn is_rule(pair: Option<&Pair<Rule>>, rule: Rule) -> bool {
    if let Some(pair) = pair {
        return pair.as_rule() == rule;
    }

    false
}
