inspired by the .DS_Store that file.gallery is built on

currently, file.gallery has no way of knowing how files should be ordered semantically. the current implementation organizes them alphanumerically which is works for formal compositions but results in a nonintuitive DOM for natural layouts

`.garden_store.json` allows file.gallery to remember the intended DOM order of files and directories. the json stores a sort-order for each directory along with a copy of the processedFiles array used in cultivate.js. 

by default, it will retain the alphanumeric order and simply be rewritten everytime `npm run cultivate` is run but if `sort-order` is set to `custom`, it will respect the order that is set, adding new items to the end and removing items that are no longer visible to cultivate.js.

# todo

i plan to add some additional filters that can be set like reverse-alpha or date. i'm not sure if that can be done through finder itself but this was the best solution i could think of to set semantic ordering, which was my priority

i want to make a gui that allows for things like adding aria labels, rearranging the order of the items, or adding custom attributes.
