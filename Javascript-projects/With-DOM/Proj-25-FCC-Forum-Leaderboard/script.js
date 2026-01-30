const forumLatest =
  "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://cdn.freecodecamp.org/curriculum/forum-latest";

const allCategories = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Backend Development", className: "backend" },
};

const timeAgo = (timestamp) => {
  const now = new Date();
  const past = new Date(timestamp);
  const diffMs = now - past;
  const diffMin = Math.floor(diffMs / (1000 * 60));
  if (diffMin < 60) {
    return `${diffMin}m ago`;
  }
  const diffHours = Math.floor(diffMin / 60);
  if (diffHours < 24) {
    return `${diffHours}h ago`;
  }
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d ago`;
};

const viewCount = (views) => {
  if (views >= 1000) {
    return `${Math.floor(views / 1000)}k`;
  }
  return views;
};

const forumCategory = (id) => {
  const cat = allCategories[id];
  if (cat) {
    return `<a href="${forumCategoryUrl}${cat.className}/${id}" class="category ${cat.className}">${cat.category}</a>`;
  } else {
    return `<a href="${forumCategoryUrl}general/${id}" class="category general">General</a>`;
  }
};

const avatars = (posters, users) => {
  return posters
    .map((poster) => {
      const user = users.find((u) => u.id === poster.user_id);
      if (!user) return "";
      let src = user.avatar_template.replace("{size}", "30");
      if (src.startsWith("/")) {
        src = avatarUrl + src;
      }
      return `<img src="${src}" alt="${user.name}">`;
    })
    .join("");
};

const showLatestPosts = (data) => {
  const {
    users,
    topic_list: { topics },
  } = data;
  const html = topics
    .map((topic) => {
      const {
        id,
        title,
        views,
        posts_count,
        slug,
        posters,
        category_id,
        bumped_at,
      } = topic;
      return `<tr>
      <td><a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>${forumCategory(category_id)}</td>
      <td><div class="avatar-container">${avatars(posters, users)}</div></td>
      <td>${posts_count - 1}</td>
      <td>${viewCount(views)}</td>
      <td>${timeAgo(bumped_at)}</td>
    </tr>`;
    })
    .join("");
  document.getElementById("posts-container").innerHTML = html;
};

const fetchData = async () => {
  try {
    const response = await fetch(forumLatest);
    const data = await response.json();
    showLatestPosts(data);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
