from flask import Flask, render_template

# profe aqui tiene que poner la ubicacion de la carpeta donde esta el archivo index.html
TEMPLATE_DIR = r"C:\Users\rober\OneDrive\Escritorio\proyecto_con_flask.py\templastes"

app = Flask(__name__, template_folder=TEMPLATE_DIR)

@app.route('/')
@app.route('/<nombre>')



def index(nombre= "Desconocido"):
   es_desconocido = nombre == "Desconocido"
   return render_template('index.html', nombre = nombre)

if __name__ == '__main__':
    app.run(debug=True)