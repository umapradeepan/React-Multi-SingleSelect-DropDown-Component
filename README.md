# How to run:

I created this project with Vite; To run, run the following:

> npm install && npm run dev

From there you should navigate to the link outputted to see the result!

# Description:

This implements the component described by the take home prompt in 'Hive Frontend Take-Home Prompt.pdf'. This is a Dropdown select menu which can support both single and multi select, and is defined in DropdownMenu.tsx.

There are 3 simple parameters required to use it:

1. defaultTitle: which is the default text before the list of selected options are shown

2. dropdownOptions: which are the list of possible options that can be selected within the dropdown

3. singleselect: a boolean value defining whether the selected options should be constrained to only 1 (or can be many)

# Room for Improvement + Additional Design Considerations

Although the barebones of the component is implemented, if I had more time there are a few improvement I'd like to make to this component. These improvements are as follows:

1. I would be enable the 'Select all' and 'Deselect all' buttons to change the appearance of the other dropdown menu option buttons. Currently all of the options are shown as selected/deselected when these buttons are clicked; however, I think it would make it easier for people to use if the checkboxes were updated accordingly too.

2. I would lift the state of whether the checkboxes are checked or not out of the DropdownMenu component. Why would I do so? When this is done, users of the component can see which checkboxes have been checked and decide to take some action accordingly (i.e. filtering of a table outside of the DropdownMenu component, based on multiple selected options)

3. Overall more aesthetically pleasing: I'd change the styling + alignment depending on where this component is used, and maybe have the options list down vertically as opposed to horizontally.

# Final Notes

Thank you for taking the time to read through my code; I really appreciate this exercise because it showed me where I'm at within my journey as a frontend engineer, and I feel like I learned a good amount from completing it. Have a nice day!
