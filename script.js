"use strict";

const questions = [
  {
    text: "Что в экономическом смысле называют собственностью?",
    options: [
      "Отношения между людьми по поводу присвоения и использования благ",
      "Исключительно физический предмет, которым кто-то пользуется",
      "Любой доход, полученный человеком за месяц"
    ],
    correct: 0
  },
  {
    text: "Какое правомочие позволяет владельцу определять юридическую судьбу имущества, например продать его?",
    options: ["Право пользования", "Право распоряжения", "Право наследования"],
    correct: 1
  },
  {
    text: "Какое утверждение наиболее точно описывает право владения?",
    options: [
      "Возможность извлекать полезные свойства вещи",
      "Возможность передавать имущество по наследству",
      "Юридически обеспеченная возможность фактически обладать вещью"
    ],
    correct: 2
  },
  {
    text: "Что означает право пользования имуществом?",
    options: [
      "Возможность извлекать из имущества его полезные свойства",
      "Право изменять собственника имущества без ограничений",
      "Обязанность хранить имущество, не используя его"
    ],
    correct: 0
  },
  {
    text: "Какой пример иллюстрирует частную собственность?",
    options: [
      "Муниципальная библиотека, принадлежащая городу",
      "Квартира, принадлежащая гражданину на законном основании",
      "Национальный парк, находящийся в государственной собственности"
    ],
    correct: 1
  },
  {
    text: "Кому принадлежит муниципальная собственность?",
    options: [
      "Исключительно федеральным органам власти",
      "Работникам предприятия, использующим имущество",
      "Муниципальному образованию, например городу или району"
    ],
    correct: 2
  },
  {
    text: "Как обычно принимаются решения о распределении ресурсов в командной экономике?",
    options: [
      "Преимущественно на основе централизованных планов и распоряжений",
      "Исключительно через свободное изменение рыночных цен",
      "По результатам анонимного голосования всех потребителей"
    ],
    correct: 0
  },
  {
    text: "Какой механизм играет ключевую роль в координации спроса и предложения в рыночной экономике?",
    options: [
      "Единый обязательный план выпуска для всех предприятий",
      "Взаимодействие цен, спроса и предложения",
      "Полное отсутствие конкуренции между производителями"
    ],
    correct: 1
  },
  {
    text: "Что характерно для смешанной экономической системы?",
    options: [
      "Существует только государственная собственность и централизованное планирование",
      "Государство не участвует в экономике ни при каких обстоятельствах",
      "Сочетаются рыночные механизмы, частный сектор и участие государства"
    ],
    correct: 2
  },
  {
    text: "Какова типичная роль государства в смешанной экономике?",
    options: [
      "Устанавливать правила, предоставлять общественные блага и корректировать отдельные рыночные сбои",
      "Заменять собой все предприятия и принимать каждое производственное решение",
      "Запрещать частную инициативу и обмен товарами"
    ],
    correct: 0
  },
  {
    text: "Что такое приватизация?",
    options: [
      "Передача частного имущества в государственную собственность",
      "Передача государственного или муниципального имущества в частную собственность в установленном порядке",
      "Создание нового налога на имущество"
    ],
    correct: 1
  },
  {
    text: "Что обычно понимают под национализацией?",
    options: [
      "Переход государственной компании в собственность её работников",
      "Разделение одного предприятия на независимые частные компании",
      "Переход имущества из частной собственности в государственную на основании закона"
    ],
    correct: 2
  },
  {
    text: "Какова основная экономическая функция конкуренции?",
    options: [
      "Стимулировать производителей повышать эффективность и лучше учитывать потребности покупателей",
      "Гарантировать одинаковую прибыль каждому предприятию",
      "Устранять необходимость выбора со стороны потребителей"
    ],
    correct: 0
  },
  {
    text: "Какова одна из характерных черт традиционной экономики?",
    options: [
      "Производство полностью определяется цифровыми платформами",
      "Хозяйственные решения во многом опираются на обычаи и устойчивые традиции",
      "Все ресурсы распределяются исключительно через биржевые торги"
    ],
    correct: 1
  },
  {
    text: "Что означает экономическая эффективность использования ресурсов?",
    options: [
      "Использование как можно большего числа ресурсов независимо от результата",
      "Отказ от оценки затрат и получаемой продукции",
      "Получение наилучшего возможного результата при имеющихся ограниченных ресурсах"
    ],
    correct: 2
  },
  {
    text: "Какой способ участия работников в управлении предприятием может быть реализован через кооператив?",
    options: [
      "Совместное владение и участие членов кооператива в принятии решений по его правилам",
      "Автоматическая передача всего имущества предприятия государству",
      "Полное устранение ответственности участников за общие решения"
    ],
    correct: 0
  },
  {
    text: "Что относится к общественным благам, которые часто обеспечивает государство?",
    options: [
      "Индивидуально изготовленная мебель по заказу покупателя",
      "Уличное освещение, доступное многим жителям одновременно",
      "Личный автомобиль, используемый одним владельцем"
    ],
    correct: 1
  },
  {
    text: "Почему права собственности важны для экономической деятельности?",
    options: [
      "Они исключают любые риски и гарантируют прибыль владельцу",
      "Они делают ненужными договоры и правовые нормы",
      "Они определяют права и обязанности в отношении имущества и помогают планировать его использование"
    ],
    correct: 2
  },
  {
    text: "Что чаще всего является стимулом предпринимателя в рыночной экономике?",
    options: [
      "Возможность получить прибыль, удовлетворяя спрос, при этом принимая на себя риск",
      "Обязательное назначение на должность центральным плановым органом",
      "Гарантия того, что покупатели приобретут любой произведённый товар"
    ],
    correct: 0
  },
  {
    text: "Что называют социально-экономической системой общества?",
    options: [
      "Перечень всех товаров, которые продаются в магазинах",
      "Способ организации хозяйства: формы собственности, производство, распределение и экономические связи",
      "Совокупность только личных доходов граждан"
    ],
    correct: 1
  }
];

const introView = document.getElementById("intro-view");
const quizContent = document.getElementById("quiz-content");
const resultView = document.getElementById("result");
const progressLabel = document.getElementById("progress-label");
const scoreLabel = document.getElementById("score-label");
const progressBar = document.querySelector('[role="progressbar"]');
const progressFill = document.getElementById("progress-fill");
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
let currentQuestion = 0;
let score = 0;
let answered = false;

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  answered = false;
  introView.hidden = true;
  resultView.hidden = true;
  quizContent.hidden = false;
  renderQuestion();
}

function renderQuestion() {
  const question = questions[currentQuestion];
  answered = false;
  progressLabel.innerHTML = `Вопрос <strong>${currentQuestion + 1}</strong> из ${questions.length}`;
  scoreLabel.textContent = `Баллы: ${score}`;
  progressBar.setAttribute("aria-valuenow", String(currentQuestion));
  progressFill.style.width = `${(currentQuestion / questions.length) * 100}%`;
  questionNumber.textContent = `Вопрос ${String(currentQuestion + 1).padStart(2, "0")}`;
  questionText.textContent = question.text;
  feedback.textContent = "";
  feedback.className = "feedback";
  nextButton.disabled = true;
  nextButton.innerHTML = currentQuestion === questions.length - 1
    ? 'Показать результат <span aria-hidden="true">→</span>'
    : 'Следующий вопрос <span aria-hidden="true">→</span>';
  answersContainer.replaceChildren();

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer";
    button.dataset.index = String(index);
    button.innerHTML = `<span class="answer-letter" aria-hidden="true">${String.fromCharCode(65 + index)}</span><span></span>`;
    button.lastElementChild.textContent = option;
    button.addEventListener("click", () => selectAnswer(index));
    answersContainer.appendChild(button);
  });

  const questionBlock = document.getElementById("question-block");
  questionBlock.style.animation = "none";
  void questionBlock.offsetWidth;
  questionBlock.style.animation = "";
}

function selectAnswer(selectedIndex) {
  if (answered) return;
  answered = true;
  const question = questions[currentQuestion];
  const correct = selectedIndex === question.correct;
  if (correct) score += 1;

  answersContainer.querySelectorAll(".answer").forEach((button) => {
    const index = Number(button.dataset.index);
    button.disabled = true;
    if (index === question.correct) button.classList.add("is-correct");
    else if (index === selectedIndex) button.classList.add("is-wrong");
  });

  feedback.textContent = correct
    ? "Верно! Вы ответили правильно."
    : `Неверно. Правильный ответ: ${question.options[question.correct]}`;
  feedback.classList.add(correct ? "correct" : "wrong");
  scoreLabel.textContent = `Баллы: ${score}`;
  nextButton.disabled = false;
  nextButton.focus();
}

function showResult() {
  quizContent.hidden = true;
  resultView.hidden = false;
  progressBar.setAttribute("aria-valuenow", String(questions.length));
  progressFill.style.width = "100%";
  document.getElementById("result-score").textContent = `${score}/20`;

  let grade;
  if (score >= 18) grade = "Отлично!";
  else if (score >= 15) grade = "Хорошо!";
  else if (score >= 10) grade = "Удовлетворительно.";
  else grade = "Нужно повторить материал.";

  document.getElementById("result-grade").textContent = grade;
  document.getElementById("result-detail").textContent = `Правильных ответов: ${score} из ${questions.length}.`;
  document.getElementById("restart-button").focus();
}

nextButton.addEventListener("click", () => {
  if (!answered) return;
  if (currentQuestion === questions.length - 1) {
    showResult();
    return;
  }
  currentQuestion += 1;
  renderQuestion();
});

document.getElementById("restart-button").addEventListener("click", startQuiz);
startQuiz();
