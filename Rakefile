task 'test' do
  require 'html/proofer'

  temp_files = ["./_site/ohpe-materiaali.html", "./_site/kurssisivu.html"]
  redirects = ["./_site/courses/general/index.html", "./_site/courses/index.html", "./_site/wepa/index.html"]

  ignored_files = temp_files.concat(redirects)

  HTML::Proofer.new("./_site", {check_html: true, check_favicon: true, file_ignore: ignored_files}).run
end
