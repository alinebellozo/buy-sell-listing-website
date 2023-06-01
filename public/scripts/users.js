// Client facing scripts here
$(() => {
  $('#fetch-users').on('click', () => {
    console.log("here")
    $.ajax({
      method: 'GET',
      url: '/api/users'
    })
    .done((response) => {
      const $usersList = $('#users');
      $usersList.empty();
      console.log (response)
      for(const user of response.users) {
        $(`<li class="user">`).text(user.name).appendTo($usersList);
      }
    });
  });
});
