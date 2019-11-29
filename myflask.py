#!

from flask import Flask, request, url_for, render_template, redirect, flash, session

app=Flask(__name__)
app.secret_key='fuckyouall'

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
	error=None

	if request.method=='POST':
		if request.form['password'] != 'admin':
			error='Incorrect password'
		else:
			global user_name
			user_name=request.form['username']
			return redirect(url_for('userhome'))


	return render_template('login.html', error=error)


@app.route('/profile')
def userhome():
	session['logged_in']=True
	flash('You are logged in.')
	return render_template('userhome.html',user_name=user_name)

@app.route('/logout')
def logout():
	session.pop('logged_in', None)
	flash('You are logged out.')
	return render_template('index.html')

@app.route('/game', methods=['GET','POST'])
def gameindex():
	if request.method=='POST':
		global choice
		choice=request.form['gender']
		return redirect(url_for('gender'))

	return render_template('gameindex.html')

@app.route('/gender')
def gender():
	return render_template('gender.html',choice=choice)

@app.route('/tuner')
def animate():
    return render_template('multiple.html')

@app.route('/balls')
def solid():
    return render_template('gravity.html')

@app.route('/sponge')
def sponge():
    return render_template('spongebob.html')


if __name__=='__main__':
	app.run(debug=True)

