var DomPage = {
  createTitle: function(tagName, tagText, tagClass) {
    var heading = document.createElement(tagName);
    heading.innerHTML = tagText;
    heading.className = tagClass;
    document.body.appendChild(heading);
  },

  createAnswerList: function(tagText, tagClass) {
    var list = document.createElement('ul');
    list.className = tagClass;
  
    for (var i = 0; i < tagText.length; i++) {
      var listElement = document.createElement('li');
      var listInput = document.createElement('input');
      listInput.setAttribute('type', 'checkbox');
      listElement.innerHTML = '<span>' + tagText[i] + '</span>';
      listElement.insertBefore(listInput, listElement.children[0]);
      list.appendChild(listElement);
    }
      document.body.appendChild(list);
  },

  createCheckButton: function(tagName, tagText, tagClass) {
    var button = document.createElement(tagName);
    button.innerHTML = tagText;
    button.className = tagClass;
    document.body.appendChild(button);
  }
};

var titleText = 'Test on Programming';
var questionText = '1. Question №1';
var answerText = ['Variant of answer №1', 'Variant of answer №2', 'Variant of answer №3'];
var buttonText = 'Check my results';

DomPage.createTitle('h1', titleText, 'main_title');

DomPage.createTitle('h4', questionText, 'question_title');
DomPage.createAnswerList(answerText, 'answer_list');

DomPage.createTitle('h4', questionText, 'question_title');
DomPage.createAnswerList(answerText, 'answer_list');

DomPage.createTitle('h4', questionText, 'question_title');
DomPage.createAnswerList(answerText, 'answer_list');

DomPage.createTitle('button', buttonText, 'btn btn-default');

