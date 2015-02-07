task 'test' do
  require 'html/proofer'
  HTML::Proofer.new("./_site", {check_html: true, href_ignore: ["#"], check_favicon: true}).run
end
