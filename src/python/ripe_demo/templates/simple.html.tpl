{% extends "partials/layout.html.tpl" %}
{% block content %}
    <div id="canvas" class="canvas" data-model="{{ model|default('', True) }}">
        <img id="frame-0" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
        <img id="frame-6" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
        <img id="frame-top" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
    </div>
    <div id="price" class="price"></div>
    <ul class="operations">
        <li id="set-part">Set Part</li>
        <li id="get-price">Get Price</li>
    </ul>
{% endblock %}