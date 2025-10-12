document.querySelectorAll('.dropdown-item').forEach(item=>{
    item.addEventListener('click', function(e){
      e.preventDefault();
      document.getElementById('subjectLabel').textContent = this.textContent;
      document.getElementById('subjectLabel').dataset.value = this.dataset.value;
      // hide dropdown using Bootstrap's API
      const btn = document.getElementById('subjectBtn');
      const bs = bootstrap.Dropdown.getOrCreateInstance(btn);
      bs.hide();
    });
  });