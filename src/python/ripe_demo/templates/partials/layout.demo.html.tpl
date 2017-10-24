{% extends "partials/layout.html.tpl" %}
{% block content %}
    <ul class="operations">
        <li id="set-part">Set Part</li>
        {% if message %}
            <li id="set-message">Set Message</li>
           {% endif %}
        <li id="get-price">Get Price</li>
        <li id="get-combinations">Get Combinations</li>
    </ul>
    <div id="price" class="price"></div>
    {% if message %}
        <div class="input">
            <input type="text" id="message" placeholder="New message" />
        </div>
    {% endif %}
    {% block canvas %}
        <div id="config" class="config" data-url="{{ url|default('', True) }}"
             data-brand="{{ brand|default('', True) }}" data-model="{{ model|default('', True) }}"
             data-variant="{{ variant|default('', True) }}" data-country="{{ country|default('', True) }}"
             data-currency="{{ currency|default('', True) }}" data-size="620" data-max_size="620" data-sensitivity="40" data-position="0" data-view="side">
        </div>
        <div id="images" class="images">
            <img id="frame-0" data-size="600" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
            <img id="frame-6" data-size="600" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
            <img id="frame-top" data-size="600" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
        </div>
    {% endblock %}
{% endblock %}
