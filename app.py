from flask import Flask, render_template


app = Flask(__name__, template_folder='C:\\Users\\rober\\OneDrive\\Escritorio\\proyecto_con_flask.py\\templastes') 

@app.route('/')
@app.route('/<nombre>')



def index(nombre= "Desconocido"):
   es_desconocido = nombre == "Desconocido"
   return render_template('index.html', nombre = nombre)

if __name__ == '__main__':
    app.run(debug=True)