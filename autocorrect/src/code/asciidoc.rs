// autocorrect: false
use super::*;

use autocorrect_derive::GrammarParser;
use pest::Parser as P;
use pest_derive::Parser;

#[derive(GrammarParser, Parser)]
#[grammar = "../grammar/asciidoc.pest"]
struct AsciiDocParser;

#[cfg(test)]
mod tests {
    use super::*;
    use pretty_assertions::assert_eq;

    #[test]
    fn test_format_latex() {
        crate::config::setup_test();

        let example = r###"
        = 如何向AutoCorrect贡献代码

        AutoCorrect是在MIT许可证下发布。如果你想贡献一些东西，或者只是想修改代码，这个文档应该可以帮助到你。

        == 行为准则

        该项目的贡献者需要遵守以下行为准则: link:CODE_OF_CONDUCT.adoc[code of conduct].
        如果有特殊情况，请将特殊的情况报告给 huacnlee@gmail.com.

        == 使用 GitHub Issues

        我们使用 GitHub Issues 来对问题进行跟踪和改进。如果您要报告问题，或者有新的建议或意见，请在 https://github.com/huacnlee/autocorrect/issues[Github Issues] 上汇报问题。

        [NOTE]
        ====
        AutoCorrect需要提前安装。
        ====

        === 构建指定项目的文档

        ==== 执行Lint检查

        [indent=0]
        ----
        $ autocorrect --lint
        ----

        === 执行AutoCorrect格式化

        通过AutoCorrect格式化自动纠正文件。

        [source]
        ----
        $ autocorrect --fix
        ----

        ....
        ..............................Done.

        AutoCorrect spend time: 21ms
        ...."###;

        let expected = r###"
        = 如何向 AutoCorrect 贡献代码

        AutoCorrect 是在 MIT 许可证下发布。如果你想贡献一些东西，或者只是想修改代码，这个文档应该可以帮助到你。

        == 行为准则

        该项目的贡献者需要遵守以下行为准则：link:CODE_OF_CONDUCT.adoc[code of conduct].
        如果有特殊情况，请将特殊的情况报告给 huacnlee@gmail.com.

        == 使用 GitHub Issues

        我们使用 GitHub Issues 来对问题进行跟踪和改进。如果您要报告问题，或者有新的建议或意见，请在 https://github.com/huacnlee/autocorrect/issues[Github Issues] 上汇报问题。

        [NOTE]
        ====
        AutoCorrect 需要提前安装。
        ====

        === 构建指定项目的文档

        ==== 执行 Lint 检查

        [indent=0]
        ----
        $ autocorrect --lint
        ----

        === 执行 AutoCorrect 格式化

        通过 AutoCorrect 格式化自动纠正文件。

        [source]
        ----
        $ autocorrect --fix
        ----

        ....
        ..............................Done.

        AutoCorrect spend time: 21ms
        ...."###;

        assert_eq!(expected, format_asciidoc(example).to_string());
    }
}
