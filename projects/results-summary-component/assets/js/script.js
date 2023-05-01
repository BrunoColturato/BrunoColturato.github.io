document.querySelector("body").onload = function () {
  // Category load
  let type_1_category = document.getElementById("type-1-category");
  type_1_category.innerText = data[0].category;

  let type_2_category = document.getElementById("type-2-category");
  type_2_category.innerText = data[1].category;

  let type_3_category = document.getElementById("type-3-category");
  type_3_category.innerText = data[2].category;

  let type_4_category = document.getElementById("type-4-category");
  type_4_category.innerText = data[3].category;

  // Points load
  let type_1_points = document.getElementById("type-1-points");
  type_1_points.innerText = data[0].score;

  let type_2_points = document.getElementById("type-2-points");
  type_2_points.innerText = data[1].score;

  let type_3_points = document.getElementById("type-3-points");
  type_3_points.innerText = data[2].score;

  let type_4_points = document.getElementById("type-4-points");
  type_4_points.innerText = data[3].score;

  // Calculate global score
  let global_score = document.getElementById("global-score");
  global_score.innerText = Math.round((data[0].score + data[1].score + data[2].score + data[3].score) / 4);
};
