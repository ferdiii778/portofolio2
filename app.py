from flask import Flask, request, render_template, redirect, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__) 

EMAIL_SENDER = 'ferdid047@gmail.com'
EMAIL_PASSWORD = 'vetr vrrf krsa iwno'
EMAIL_RECEIVER = 'ferdid047@gmail.com'

@app.route('/send_message', methods=['POST'])
def send_message():
    name = request.form['name']
    email = request.form['email']
    subject = request.form['subject']
    message = request.form['message']

    full_message = f"Nama: {name}\nEmail: {email}\nSubjek: {subject}\nPesan:\n{message}"

    msg = MIMEMultipart()
    msg['From'] = email
    msg['To'] = EMAIL_RECEIVER
    msg['Subject'] = f"[Contact Form] {subject}"

    msg.attach(MIMEText(full_message, 'plain'))

    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(EMAIL_SENDER, EMAIL_PASSWORD)
        server.sendmail(email, EMAIL_RECEIVER, msg.as_string())
        server.quit()
        return "<script>alert('Pesan berhasil dikirim!'); window.location.href='/'</script>"
    except Exception as e:
        return f"<script>alert('Gagal mengirim pesan: {e}'); window.location.href='/'</script>"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/fashfit')
def detail_fashfit():
    return render_template("fashfit/detail_fashfit.html")


@app.route('/demo_fashfit')
def demo_fashfit():
    return render_template("fashfit/demo_fashfit_web.html")

@app.route('/guardian')
def detail_guardian():
    return render_template("guardian/detail_guardian.html")

@app.route('/demo_guardian')
def demo_guardian():
    return render_template("guardian/demo_guardian.html")

if __name__ == '__main__':
    app.run(debug=True)