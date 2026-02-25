source "https://rubygems.org"

# Lock ffi to a version compatible with Ruby 2.6
gem "ffi", "~> 1.15.5"

# Use older github-pages gem version that works with Ruby 2.6
gem "github-pages", "~> 228", group: :jekyll_plugins

# Webrick is required for Ruby 3.0+ to run Jekyll serve
gem "webrick", "~> 1.7"

# Use kramdown instead of commonmark (no native compilation needed)
gem "kramdown", "~> 2.3"
gem "kramdown-parser-gfm", "~> 1.1"

# Plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag", "~> 2.8"
end