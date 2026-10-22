// golfingmilestones.com: seasonal banner, "Find your milestone", optional photos.
(function () {
  var now = Date.now();

  // Seasonal banner. Switch times are midnight US Eastern, written in UTC.
  var SEASONS = [
    { from: null, until: '2026-12-25T05:00:00Z',
      banner: 'Give a golfer their 2027 goal: the book that shows them how, $19.99.' },
    { from: '2026-12-25T05:00:00Z', until: '2027-02-01T05:00:00Z',
      banner: 'Make 2027 the year you break 90.' }
  ];
  SEASONS.forEach(function (s) {
    var a = s.from ? Date.parse(s.from) : -Infinity, b = s.until ? Date.parse(s.until) : Infinity;
    if (now >= a && now < b) {
      document.getElementById('promo-text').textContent = s.banner;
      document.getElementById('promo').hidden = false;
    }
  });

  // Find your milestone.
  var form = document.getElementById('finder');
  var input = document.getElementById('avg');
  var box = document.getElementById('finder-result');
  var goal = document.getElementById('finder-goal');
  var first = document.getElementById('finder-first');
  var link = document.getElementById('finder-link');
  var LEVELS = [
    { min: 120, goal: 'Your next milestone: break 120', first: 'Start with solid contact and short putts. Play the forward tees while you build.', anchor: '#m120', label: 'See what to work on to break 120' },
    { min: 100, goal: 'Your next milestone: break 100', first: 'Start with penalty strokes and lag putting. They\u2019re the fastest strokes you\u2019ll ever save.', anchor: '#m100', label: 'See what to work on to break 100' },
    { min: 90,  goal: 'Your next milestone: break 90', first: 'Start with more club on approach shots and simple chips. Then follow the four-week plan.', anchor: '#m90', label: 'See what to work on to break 90' },
    { min: 80,  goal: 'Your next milestone: break 80', first: 'Start with your wedge distances and up-and-downs. Scoring happens inside 100 yards now.', anchor: '#m80', label: 'See what to work on to break 80' },
    { min: 75,  goal: 'Your next milestone: break 75', first: 'You\u2019re already a strong player. Your strokes now come from inside 100 yards and the four- to six-footers. A coach can find the last few fastest.', anchor: '#m80', label: 'See the breaking 80 skills to sharpen' },
    { min: 0,   goal: 'Your next milestone: break par', first: 'You\u2019re playing great golf. At this level, every stroke comes from course management, wedges and the short putts. A coach can find the last few fastest.', anchor: '#m80', label: 'See the scoring skills to sharpen' }
  ];
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = parseInt(input.value, 10);
    if (isNaN(v) || v < 55 || v > 160) {
      input.setAttribute('aria-invalid', 'true');
      box.hidden = false;
      goal.textContent = 'Enter a score between 55 and 160.';
      first.textContent = '';
      link.hidden = true;
      input.focus();
      return;
    }
    input.setAttribute('aria-invalid', 'false');
    var lvl = LEVELS.filter(function (l) { return v >= l.min; })[0];
    goal.textContent = lvl.goal;
    first.textContent = lvl.first;
    link.href = lvl.anchor;
    link.textContent = lvl.label;
    link.hidden = false;
    box.hidden = false;
  });

  // Hide optional photos that haven't been added yet.
  document.querySelectorAll('.optional-photo img').forEach(function (img) {
    function hide() { img.closest('.optional-photo').hidden = true; }
    if (img.complete && img.naturalWidth === 0) hide();
    img.addEventListener('error', hide);
  });
})();
