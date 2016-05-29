task 'test' do
  require 'rubygems'
  require 'bundler'

  Bundler.require(:default, :test)

  require 'html-proofer'
  require 'html/pipeline'


 # require 'html/proofer'
  temp_files = ["./_site/ohpe-materiaali.html", "./_site/kurssisivu.html"]
  redirects = ["./_site/courses/general/index.html", "./_site/courses/index.html", "./_site/wepa/index.html"]
  ignored_files = temp_files.concat(redirects)

  HTMLProofer.check_directory("./_site", {
    check_html: true,
    check_favicon: true,
    file_ignore: ignored_files,
    disable_external: true
  }).run
end
