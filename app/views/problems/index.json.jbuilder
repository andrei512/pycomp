json.array!(@problems) do |problem|
  json.extract! problem, :id, :name, :description, :public
  json.url problem_url(problem, format: :json)
end
