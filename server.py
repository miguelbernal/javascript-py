from flask import Flask, render_template

app = Flask(__name__)

@app.route("/") 
def sitio(): 
    return render_template('index.html') # sentencias dentro de la funcion

