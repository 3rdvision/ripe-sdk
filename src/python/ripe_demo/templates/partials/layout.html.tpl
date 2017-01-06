{% block html %}
    <!DOCTYPE html>
    <html>
    <head>
        {% block head scoped %}
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <link rel="stylesheet" type="text/css" href="{{ touch('//libs.platforme.com/uxf/css/ux-min.css') }}" />
            <link rel="stylesheet" type="text/css" href="{{ url_for('static', filename = 'css/layout.css') }}" />
            <link rel="shortcut icon" href="{{ url_for('static', filename = 'images/favicon.ico') }}" />
            <script type="text/javascript" src="{{ touch('//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js') }}"></script>
            <script type="text/javascript" src="{{ touch('//libs.platforme.com/uxf/js/ux-min.js') }}"></script>
            <script type="text/javascript" src="{{ url_for('static', filename = 'js/main.js', compress = 'js') }}"></script>
            <title>{{ title }}{% block title %}{% endblock %}</title>
        {% endblock %}
    </head>
    <body class="ux wait-load">
        <div id="header" class="header">
            {% block header %}
                <div class="header-container">
                </div>
            {% endblock %}
        </div>
        <div id="content" class="content {{ mode }}">{% block content %}{% endblock %}</div>
        <div id="footer" class="footer">
            {% block footer %}
                <div class="footer-container">
                    <span>&copy; 2008-2017 PLATFORME</span>
                </div>
            {% endblock %}
        </div>
    </body>
    </html>
{% endblock %}
