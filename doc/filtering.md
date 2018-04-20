# Filtering

This file outlines how we implemented filtering, `FilterDropdown`, and `ResetDropdown`
for natphoto.me.

## Backend

The filtering functionality was mainly done through the frontend. The api call to receive
all photos is http://api.natphoto.me/photos. The api call to receive all cameras is
http://api.natphoto.me/cameras. The api call to receive all parks is
http://api.natphoto.me/parks.

## Frontend

We designed the filter functionality to apply to attributes of all three models
based on what users would want to filter by. Some of these include filtering by
state for national parks, the number of likes for photos, and the prices for
cameras.

Our frontend filtering logic is to put specific values from the api call into specific keys
in the JSON named `filter1` and `filter2`. We can then pass these to our `GridPage`
component, which will pass this information into the `FilterDropdown` and `ResetDropdown`
components it creates.

Within the `FilterDropdown` component, it creates various dropdown options based on the array
of filter options it receives. When one of these options is clicked, the data is sent back to
the parent, to set the state in the parent.

Once the `GridPage` parent receives the updated state on what the data is to be filtered by,
it calls render. We must filter the data based on what the state is set to filter by, so we check
both options and filter by both if necessary. We have the option of filtering by a range or value,
depending on what is to be filtered by, so we check which option to choose. We used the JavaScript
filter function with our custom filter condition to filter the data. Once the data is filtered,
it will then be sent to be sorted. The component `ResetDropdown` works in a similar way to `FilterDropdown`,
but instead it clears the state of the parent on what attribute to filter by. Finally, we split the
sorted and filtered data to be made into GridCards for pagination.
