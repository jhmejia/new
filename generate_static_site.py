# Make index.html from templates/index.html 

from jinja2 import Environment, FileSystemLoader

# Define the Jinja2 Environment
env = Environment(loader=FileSystemLoader("templates"))

# Load the template
template = env.get_template("index.html")


# Render the template with the workout data
static_html = template.render()

# Write the rendered template to a static HTML file
with open("index.html", "w") as f:
    f.write(static_html)

