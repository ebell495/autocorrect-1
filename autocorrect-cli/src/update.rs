use self_update::cargo_crate_version;

type Result<T> = std::result::Result<T, Box<dyn std::error::Error>>;

fn get_target(target: &str) -> String {
    match target {
        "aarch64-apple-darwin" => "darwin-arm64",
        "x86_64-apple-darwin" => "darwin-amd64",
        "x86_64-pc-windows-gnu" => "windows-amd64",
        "x86_64-pc-windows-msvc" => "windows-amd64",
        "x86_64-unknown-linux-gnu" => "linux-amd64",
        "aarch64-unknown-linux-gnu" => "linux-arm64",
        _ => "linux-amd64",
    }
    .to_string()
}

#[allow(dead_code)]
fn make_sudo() {
    if cfg!(target_os = "windows") {
        println!("You need to run this command as administrator.");
        return;
    }

    match ::std::process::Command::new("sudo")
        .arg("/usr/bin/id")
        .output()
    {
        Ok(output) => if output.status.success() {},
        Err(_) => {
            println!("You need to run this command as sudo mode.");
        }
    }
}

pub fn run() -> Result<()> {
    // make_sudo();
    sudo::escalate_if_needed()?;

    let target = get_target(self_update::get_target());

    self_update::backends::github::Update::configure()
        .repo_owner("huacnlee")
        .repo_name("autocorrect")
        .bin_name("autocorrect")
        .target(&target)
        .show_download_progress(true)
        .current_version(cargo_crate_version!())
        .build()?
        .update()?;

    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_get_target() {
        assert_eq!(get_target("aarch64-apple-darwin"), "darwin-arm64");
        assert_eq!(get_target("x86_64-apple-darwin"), "darwin-amd64");
        assert_eq!(get_target("x86_64-pc-windows-gnu"), "windows-amd64");
        assert_eq!(get_target("x86_64-pc-windows-msvc"), "windows-amd64");
        assert_eq!(get_target("x86_64-unknown-linux-gnu"), "linux-amd64");
        assert_eq!(get_target("aarch64-unknown-linux-gnu"), "linux-arm64");
        assert_eq!(get_target("x86_64-unknown-linux-gnu"), "linux-amd64");
    }
}
