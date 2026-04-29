localStorage.removeItem('cineindia_movies');

const TMDB_IMG = 'https://image.tmdb.org/t/p/w500';

// poster_path values verified live from TMDB API
const MOVIES = [
  {
    id: 1, title: "Pathaan", industry: "Bollywood", year: 2023,
    director: "Siddharth Anand", emoji: "🔥",
    poster: TMDB_IMG + "/arf00BkwvXo0CFKbaD9OpqdE4Nu.jpg",
    reviews: [
      { stars: 5, text: "Shah Rukh Khan's comeback was absolutely spectacular! The action sequences are mind-blowing.", date: "Jan 2023" },
      { stars: 4, text: "Brilliant action entertainer. Deepika and SRK have amazing chemistry.", date: "Feb 2023" }
    ]
  },
  {
    id: 2, title: "RRR", industry: "Tollywood", year: 2022,
    director: "S.S. Rajamouli", emoji: "⚡",
    poster: TMDB_IMG + "/u0XUBNQWlOvrh0Gd97ARGpIkL0.jpg",
    reviews: [
      { stars: 5, text: "A cinematic masterpiece! Rajamouli has outdone himself. Naatu Naatu is legendary.", date: "Mar 2022" },
      { stars: 5, text: "The best Indian film in decades. Ram Charan and Jr NTR are phenomenal.", date: "Apr 2022" },
      { stars: 4, text: "Epic storytelling with breathtaking visuals. A must-watch!", date: "May 2022" }
    ]
  },
  {
    id: 3, title: "KGF Chapter 2", industry: "Tollywood", year: 2022,
    director: "Prashanth Neel", emoji: "💎",
    poster: TMDB_IMG + "/khNVygolU0TxLIDWff5tQlAhZ23.jpg",
    reviews: [
      { stars: 5, text: "Yash is a powerhouse! The scale of this film is unmatched.", date: "Apr 2022" },
      { stars: 4, text: "Bigger, bolder, and more intense than the first. Rocky Bhai rules!", date: "May 2022" }
    ]
  },
  {
    id: 4, title: "Vikram", industry: "Kollywood", year: 2022,
    director: "Lokesh Kanagaraj", emoji: "🎯",
    poster: TMDB_IMG + "/774UV1aCURb4s4JfEFg3IEMu5Zj.jpg",
    reviews: [
      { stars: 5, text: "Kamal Haasan is a legend. The climax is absolutely insane!", date: "Jun 2022" },
      { stars: 5, text: "Lokesh Kanagaraj has created a universe. Fahadh Faasil steals the show.", date: "Jul 2022" }
    ]
  },
  {
    id: 5, title: "Brahmastra", industry: "Bollywood", year: 2022,
    director: "Ayan Mukerji", emoji: "✨",
    poster: TMDB_IMG + "/x61qdvHIsr9U53FwoLVDQqAGur0.jpg",
    reviews: [
      { stars: 4, text: "Visually stunning! The VFX are on par with Hollywood standards.", date: "Sep 2022" },
      { stars: 3, text: "Beautiful visuals but the story could have been stronger.", date: "Oct 2022" }
    ]
  },
  {
    id: 6, title: "Pushpa: The Rise", industry: "Tollywood", year: 2021,
    director: "Sukumar", emoji: "🌿",
    poster: TMDB_IMG + "/oaRk2HgOirEeNuDCwwScmq7rKvS.jpg",
    reviews: [
      { stars: 5, text: "Allu Arjun is fire! His swagger and dialogue delivery are iconic.", date: "Dec 2021" },
      { stars: 4, text: "A raw, gritty story told brilliantly. Pushpa Raj is unforgettable.", date: "Jan 2022" }
    ]
  },
  {
    id: 7, title: "Ponniyin Selvan", industry: "Kollywood", year: 2022,
    director: "Mani Ratnam", emoji: "👑",
    poster: TMDB_IMG + "/zSNyZUeqDdii0doQ9970E90kCkb.jpg",
    reviews: [
      { stars: 5, text: "Mani Ratnam's magnum opus. The grandeur and storytelling are unparalleled.", date: "Sep 2022" },
      { stars: 5, text: "A visual feast! The Chola empire comes alive on screen.", date: "Oct 2022" }
    ]
  },
  {
    id: 8, title: "Jawan", industry: "Bollywood", year: 2023,
    director: "Atlee", emoji: "🎪",
    poster: TMDB_IMG + "/jFt1gS4BGHlK8xt76Y81Alp4dbt.jpg",
    reviews: [
      { stars: 5, text: "SRK in double role is mind-blowing! Atlee's mass entertainer at its best.", date: "Sep 2023" },
      { stars: 4, text: "Packed with action, emotion, and social messages. Blockbuster!", date: "Oct 2023" }
    ]
  },
  {
    id: 9, title: "2018", industry: "Mollywood", year: 2023,
    director: "Jude Anthany Joseph", emoji: "🌊",
    poster: TMDB_IMG + "/1fMM5yjLYJNfO3CSQBpfC1kqeIK.jpg",
    reviews: [
      { stars: 5, text: "One of the most emotionally powerful films ever made. Tears throughout.", date: "May 2023" },
      { stars: 5, text: "Kerala floods depicted with such sensitivity and heroism. Masterpiece.", date: "Jun 2023" }
    ]
  },
  {
    id: 10, title: "Animal", industry: "Bollywood", year: 2023,
    director: "Sandeep Reddy Vanga", emoji: "🐺",
    poster: TMDB_IMG + "/hr9rjR3J0xBBKmlJ4n3gHId9ccx.jpg",
    reviews: [
      { stars: 4, text: "Ranbir Kapoor gives the performance of his career. Intense and raw.", date: "Dec 2023" },
      { stars: 3, text: "Controversial but undeniably gripping. Bobby Deol's entry is iconic.", date: "Dec 2023" }
    ]
  },
  {
    id: 11, title: "Leo", industry: "Kollywood", year: 2023,
    director: "Lokesh Kanagaraj", emoji: "🦁",
    poster: TMDB_IMG + "/t1oAdt8JjUs4sHEBvE8fKtjV7er.jpg",
    reviews: [
      { stars: 5, text: "Thalapathy Vijay is unstoppable! The action and BGM are top-notch.", date: "Oct 2023" },
      { stars: 4, text: "LCU expands brilliantly. Lokesh delivers another banger.", date: "Nov 2023" }
    ]
  },
  {
    id: 12, title: "Premalu", industry: "Mollywood", year: 2024,
    director: "Girish A.D.", emoji: "💕",
    poster: TMDB_IMG + "/uPpmBjY3znUqGY8kYwI5xvOrSc0.jpg",
    reviews: [
      { stars: 5, text: "The most charming and relatable love story in recent Malayalam cinema!", date: "Mar 2024" },
      { stars: 5, text: "Naslen and Mamitha are adorable. Pure feel-good cinema.", date: "Apr 2024" }
    ]
  }
];

let movies = [...MOVIES];
let activeFilter = 'All';
let activeSort = 'rating';
let selectedRating = 0;

function getAvgRating(movie) {
  if (!movie.reviews.length) return 0;
  return (movie.reviews.reduce((s, r) => s + r.stars, 0) / movie.reviews.length).toFixed(1);
}

function getBadgeClass(industry) {
  return `badge-${industry.toLowerCase()}`;
}

function renderStars(rating) {
  const full = Math.round(rating);
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}

function renderMovies() {
  const grid = document.getElementById('moviesGrid');
  const search = document.getElementById('searchInput').value.toLowerCase();

  let filtered = movies.filter(m => {
    const matchFilter = activeFilter === 'All' || m.industry === activeFilter;
    const matchSearch = m.title.toLowerCase().includes(search) || m.director.toLowerCase().includes(search);
    return matchFilter && matchSearch;
  });

  filtered.sort((a, b) => {
    if (activeSort === 'rating') return getAvgRating(b) - getAvgRating(a);
    if (activeSort === 'year') return b.year - a.year;
    if (activeSort === 'title') return a.title.localeCompare(b.title);
  });

  if (!filtered.length) {
    grid.innerHTML = `<div class="no-results"><span>🎬</span>No movies found.</div>`;
    return;
  }

  grid.innerHTML = filtered.map((m, i) => `
    <div class="movie-card" onclick="openModal(${m.id})" style="animation-delay:${i * 0.05}s">
      <div class="card-poster">
        ${m.poster
          ? `<img src="${m.poster}" alt="${m.title}" onerror="this.parentElement.innerHTML='<div class=\\'no-poster\\'><span>${m.emoji}</span></div>'">`
          : `<div class="no-poster"><span>${m.emoji}</span></div>`}
        <div class="card-overlay"></div>
        <span class="card-badge ${getBadgeClass(m.industry)}">${m.industry}</span>
        <div class="card-rating">★ ${getAvgRating(m)}</div>
      </div>
      <div class="card-info">
        <div class="card-title">${m.title}</div>
        <div class="card-meta"><span>${m.year}</span><span>${m.director}</span></div>
        <div class="card-reviews">${m.reviews.length} review${m.reviews.length !== 1 ? 's' : ''}</div>
      </div>
    </div>`).join('');
}

function openModal(id) {
  const m = movies.find(x => x.id === id);
  if (!m) return;
  const avg = getAvgRating(m);

  const reviewsHTML = m.reviews.length
    ? m.reviews.map(r => `
        <div class="review-item">
          <div class="review-item-header">
            <span class="review-item-stars">${renderStars(r.stars)} ${r.stars}/5</span>
            <span class="review-item-date">${r.date}</span>
          </div>
          <p class="review-item-text">${r.text}</p>
        </div>`).join('')
    : `<p style="color:var(--muted)">No reviews yet. Be the first!</p>`;

  document.getElementById('modalContent').innerHTML = `
    ${m.poster
      ? `<img class="modal-poster" src="${m.poster}" alt="${m.title}" onerror="this.outerHTML='<div class=\\'modal-no-poster\\'>${m.emoji}</div>'">`
      : `<div class="modal-no-poster">${m.emoji}</div>`}
    <div class="modal-body">
      <div class="modal-industry">${m.industry} • ${m.year}</div>
      <div class="modal-title">${m.title}</div>
      <div class="modal-meta">
        <span>🎬 ${m.director}</span>
        <span>📝 ${m.reviews.length} reviews</span>
      </div>
      <div class="modal-rating-big">★ ${avg} <span>/ 5.0</span></div>
      <hr class="modal-divider"/>
      <div class="modal-reviews-title">Community Reviews</div>
      ${reviewsHTML}
    </div>`;

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

function updateStats() {
  document.getElementById('totalMovies').textContent = movies.length;
  document.getElementById('totalReviews').textContent = movies.reduce((s, m) => s + m.reviews.length, 0);
}

function buildFilmStrip() {
  const strip = document.getElementById('filmStrip');
  const items = [...movies, ...movies];
  strip.innerHTML = items.map(m => `
    <div class="film-frame">
      ${m.poster
        ? `<img src="${m.poster}" alt="${m.title}" onerror="this.parentElement.innerHTML='<div class=\\'placeholder\\'>${m.emoji}</div>'">`
        : `<div class="placeholder">${m.emoji}</div>`}
    </div>`).join('');
}

document.getElementById('starInput').addEventListener('click', e => {
  if (e.target.tagName !== 'SPAN') return;
  selectedRating = +e.target.dataset.val;
  document.getElementById('ratingValue').value = selectedRating;
  document.querySelectorAll('#starInput span').forEach((s, i) => s.classList.toggle('active', i < selectedRating));
});

document.getElementById('starInput').addEventListener('mouseover', e => {
  if (e.target.tagName !== 'SPAN') return;
  const val = +e.target.dataset.val;
  document.querySelectorAll('#starInput span').forEach((s, i) => s.style.color = i < val ? 'var(--gold)' : '');
});

document.getElementById('starInput').addEventListener('mouseleave', () => {
  document.querySelectorAll('#starInput span').forEach((s, i) => s.style.color = i < selectedRating ? 'var(--gold)' : '');
});

document.getElementById('reviewForm').addEventListener('submit', async e => {
  e.preventDefault();
  const title = document.getElementById('movieTitle').value.trim();
  const industry = document.getElementById('movieIndustry').value;
  const year = +document.getElementById('movieYear').value;
  const director = document.getElementById('movieDirector').value.trim() || 'Unknown';
  const rating = +document.getElementById('ratingValue').value;
  const text = document.getElementById('reviewText').value.trim();
  const posterInput = document.getElementById('posterUrl').value.trim();

  if (!title || !year) return showToast('⚠️ Please fill in required fields');
  if (rating === 0) return showToast('⭐ Please select a rating');
  if (!text) return showToast('✍️ Please write a review');

  const existing = movies.find(m => m.title.toLowerCase() === title.toLowerCase());
  const now = new Date().toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });

  if (existing) {
    existing.reviews.unshift({ stars: rating, text, date: now });
  } else {
    const emojis = ['🎬', '🎭', '🎪', '🌟', '🔥', '💫', '🎯', '✨'];
    let poster = posterInput || null;
    if (!poster) {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8265bd1679663a7ea12ac168da84d2e8&query=${encodeURIComponent(title)}`);
        const data = await res.json();
        if (data.results?.[0]?.poster_path) poster = TMDB_IMG + data.results[0].poster_path;
      } catch (_) {}
    }
    movies.unshift({
      id: Date.now(), title, industry, year, director,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      poster,
      reviews: [{ stars: rating, text, date: now }]
    });
  }

  renderMovies();
  updateStats();
  buildFilmStrip();
  showToast(`✅ Review added for "${title}"!`);
  e.target.reset();
  selectedRating = 0;
  document.querySelectorAll('#starInput span').forEach(s => { s.classList.remove('active'); s.style.color = ''; });
  document.getElementById('ratingValue').value = 0;
});

document.getElementById('filterTabs').addEventListener('click', e => {
  if (!e.target.classList.contains('filter-btn')) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  activeFilter = e.target.dataset.filter;
  renderMovies();
});

document.getElementById('sortSelect').addEventListener('change', e => { activeSort = e.target.value; renderMovies(); });
document.getElementById('searchInput').addEventListener('input', renderMovies);
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

renderMovies();
buildFilmStrip();
updateStats();
