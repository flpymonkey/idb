# Sorting

This file outlines how we implemented sorting and `SortDropdown` for natphoto.me.

## Backend

The sorting functionality was mainly done through the frontend. The api call to receive
all photos is http://api.natphoto.me/photos. The api call to receive all cameras is
http://api.natphoto.me/cameras. The api call to receive all parks is
http://api.natphoto.me/parks.

## Frontend

Our frontend sorting logic is to put specific values from the api call into specific keys
in the JSON named `sort1`, `sort2`, and `sort3`. We can then pass these to our `GridPage`
component, which will pass this information into the `SortDropdown` component it creates.

Within the `SortDropdown` component, it creates various dropdown options based on the array
of sort options it receives. These options also have the option of being sorted numerically,
or alphabetically, depending on what is to be sorted. When one of these options is clicked,
the data is sent back to the parent, to set the state in the parent.

Once the `GridPage` parent receives the updated state on what the data is to be sorted by, and
what direction to sort it in, it calls render. We use a tool named `react-data-sort`, which handles
the sorting for us. We can extract the sort attribute and direction from the state and pass it to
`react-data-sort` to be sorted. Finally, we split the sorted data to be made into GridCards for
pagination.

* react-data-sort - A tool we used to be able to sort our data. It was useful in the way we were
able to feed it data, what attribute to sort by, and direction, and it would sort our data. It also
supports pagination, but we used React's pagination for this.
