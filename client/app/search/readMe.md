Resources:
  1. https://material.angularjs.org/latest/demo/autocomplete
  2. https://material.angularjs.org/latest/api/directive/mdAutocomplete
  3. https://ghiden.github.io/angucomplete-alt/
  4. http://embed.plnkr.co/2luZzS/

Custom Directive docs: https://docs.angularjs.org/guide/directive

General idea/goals:
  - User types in string
  - autocomplete (dropdown list) of categories and tags
  - if user clicks on an option
    - execute query search function (create one somewhere)
    - filter search query to DB if you can
    - if not, filter received data
  - if user goes with their typed in search
    - follow logic/algo of docs on autocomplete above (you will have
      to customize)
  - will send data to cardList components
