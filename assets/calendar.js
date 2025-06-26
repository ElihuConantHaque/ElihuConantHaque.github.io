fetch('./assets/events.json')
  .then(response => response.json())
  .then(events => {
    const eventList = document.getElementById('event-list');
    if (eventList) {
      eventList.innerHTML = events.map(event => `
        <div class="bg-gray-800 rounded-lg shadow-md p-4 flex flex-col md:flex-row md:items-center md:justify-between">
            <div class="flex items-center mb-2 md:mb-0">
                <div class="bg-blue-600 text-white rounded-full w-16 h-16 flex flex-col items-center justify-center mr-4">
                    <span class="text-2xl font-bold">${event.month}</span>
                    <span class="text-lg">${event.date}</span>
                </div>
                <div>
                    <h2 class="text-lg font-semibold text-white">${event.name}</h2>
                    <p class="text-gray-300 text-sm">${event.location}</p>
                </div>
            </div>
            <div class="text-gray-400 text-sm mt-2 md:mt-0 md:text-right">
                ${event.desc}
            </div>
        </div>
      `).join('');
    }
  })
  .catch(error => {
    const eventList = document.getElementById('event-list');
    if (eventList) {
      eventList.innerHTML = '<div class="text-red-400">Failed to load events.</div>';
    }
    console.error('Error loading events:', error);
  }); 