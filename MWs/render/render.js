/**
 * render
 * @param objectrepository
 * @param template
 * render dynamic front end
 * @returns next
 */
module.exports = function (objectrepository, template) {
    return function (req,res,next) {
        res.render(template);
        return next;
    }
}