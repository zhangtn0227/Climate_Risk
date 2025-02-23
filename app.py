import pandas as pd
import numpy as np
from datetime import timedelta
# import sqlalchemy
# from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.orm import Session
# from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template,request,redirect,url_for,jsonify
# from flask_sqlalchemy import SQLAlchemy

App_dic = {
    "geo_address":"Easterwrewern District, Hong Kong SAR",
    "asset_category_option":"2",
    "asset_type_option":"1"
}

Asset_category_dic = {
    "1":"Water Supply",
    "2":"Gas Supply",
    "3":"Power"
}

Asset_type_dic = {
    "1":"Park",
    "2":"Street Pole",
    "3":"School"
}


app = Flask(__name__, static_folder='static')

@app.route("/")
def base():
    """Return the homepage."""
    return render_template("index.html", App_dic=App_dic)

'''
@app.route("/direct_case_detail",methods=['POST'])
def redirect_to_page():
    """Return the homepage."""
    """
    geolocation = request.form['geolocation']
    asset_category_option = request.form['asset_category_option']
    asset_type_option = request.form['asset_type_option']
    App_dic['geo_address'] = geolocation
    App_dic['asset_category_option'] = Asset_category_dic[asset_category_option]
    App_dic['asset_type_option'] = Asset_type_dic[asset_type_option]
    """
    return redirect(url_for('case_detail'))
    #return render_template("customerinput.html",App_dic = App_dic)
'''
@app.route("/case_detail",methods=['GET'])
def case_detail():
    """Return the homepage."""
    return ""

                


if __name__ == "__main__":
    app.jinja_env.auto_reload = True
    app.config['JSON_AS_ASCII'] = False
    app.config['SEND_FILE_MAX_AGE_DEFAULT'] = timedelta(seconds=1)
    app.run(port = 5001, debug=True)

