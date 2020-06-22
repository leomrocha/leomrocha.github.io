# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "beautiful-jekyll-theme"
  spec.version       = "3.0.0"
  spec.authors       = ["Leo M. Rocha"]
  # spec.email         = ["..."]

  spec.summary       = "Leo's Home"
  spec.homepage      = "https://leomrocha.github.io"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|LICENSE|README|feed|404|_data|tags|stfaticman)}i) }

  # spec.metadata      = {  }

  spec.add_runtime_dependency "jekyll", "~> 3.8"
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"
  
  spec.add_runtime_dependency "jekyll-multiple-languages-plugin"

  spec.add_development_dependency "bundler", ">= 1.16"
  spec.add_development_dependency "rake", "~> 13.0.1"
end
