const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

const createTags = function (input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
};

const pickRandomTag = function () {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
};

const highLightTag = function (tag) {
  tag.classList.add("highlight");
};

const unHighLightTag = function (tag) {
  tag.classList.remove("highlight");
};

const randomSelect = function () {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highLightTag(randomTag);
    setTimeout(() => {
      unHighLightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highLightTag(randomTag);
    }, 100);
  }, times * 100);
};

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});
