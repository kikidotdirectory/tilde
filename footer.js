
function updateCurrentTime() {
  const now = new Date();
  const timeString = now.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  const dateString = now.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  document.getElementById('current-time-time').textContent = timeString;
  document.getElementById('current-time-date').textContent = dateString;
}

async function setLastUpdated() {
  try {
    const response = await fetch(window.location.href, { method: 'HEAD' });
    const lastModified = response.headers.get('Last-Modified');
    let lastUpdated;
    if (lastModified) {
      lastUpdated = new Date(lastModified);
    } else {
      lastUpdated = new Date();
    }

    const timeString = lastUpdated.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    const dateString = lastUpdated.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    document.getElementById('last-updated-time').textContent = timeString;
    document.getElementById('last-updated-date').textContent = dateString;
  } catch (error) {
    const fallbackDate = new Date();
    const timeString = fallbackDate.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    const dateString = fallbackDate.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    document.getElementById('last-updated-time').textContent = timeString;
    document.getElementById('last-updated-date').textContent = dateString;
  }
}
setLastUpdated();
updateCurrentTime();
setInterval(updateCurrentTime, 1000);
