console.log("Its working")
if (window.location.pathname === "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    const id = $(this).attr("data-id");

    var request = {
      url: `http://localhost:5000/api/users/${id}`,
      method: "DELETE",
      date: data,
    };
    if (confirm("Do you really want to delete this record?")) {
      $.ajax(request).done(function (response) {
        alert("Data Deleted Successfully!");
        location.reload();
      });
    }
  });
}
