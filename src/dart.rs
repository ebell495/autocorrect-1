// autocorrect: false
use super::*;
use pest::iterators::Pair;
use pest::Parser as P;
use pest_derive::Parser;

#[derive(Parser)]
#[grammar = "peg/dart.pest"]
struct DartParser;

pub fn format_dart(text: &str) -> String {
  let result = DartParser::parse(Rule::item, text);
  match result {
    Ok(items) => {
      let mut out = String::new();
      for item in items {
        format_dart_pair(&mut out, item);
      }
      return out;
    }
    Err(_err) => {
      return String::from(text);
    }
  }
}

fn format_dart_pair(text: &mut String, item: Pair<Rule>) {
  match item.as_rule() {
    Rule::string | Rule::comment => text.push_str(format(item.as_str()).as_str()),
    Rule::item => {
      for sub in item.into_inner() {
        format_dart_pair(text, sub);
      }
    }
    _ => text.push_str(item.as_str()),
  }
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn it_format_dart() {
    let example = r###"
/** 
 * 第1行注释
 * 第2行注释
 */
String helloWorld(String name) {
  // 第3行注释
  var singleLineString = "第1个字符串string";
  var singleLineString = '第2个字符串string';

  var quotation = """
  这是第3行字符串
  这是第4行
  """;

  let quotation = '''
  这是第5行字符串
  这是第6行
  ''';
}
"###;

    let expect = r###"
/** 
 * 第 1 行注释
 * 第 2 行注释
 */
String helloWorld(String name) {
  // 第 3 行注释
  var singleLineString = "第 1 个字符串 string";
  var singleLineString = '第 2 个字符串 string';

  var quotation = """
  这是第 3 行字符串
  这是第 4 行
  """;

  let quotation = '''
  这是第 5 行字符串
  这是第 6 行
  ''';
}
"###;

    assert_eq!(expect, format_dart(example));
  }
}