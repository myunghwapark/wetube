import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", {pageTitle: "Join"});
}

export const postJoin = (req, res) => {
    const {
        body: {name, email, password, password2}
    } = req;
    if(password !== password2) {
        res.status(400); // bad request
    }
    else {
        // To do: Register user
        // To do: Login
        res.redirect(routes.home);
    }
    res.render("join", {pageTitle: "Join"});
}



export const getLogin = (req, res) => res.render("login", {pageTitle: "Log In"});
export const postLogin = (req, res) => {
    // To Do: Check password
    res.redirect(routes.home);
}

export const logout = (req, res) => {
    // To Do: Process Log Out
    res.redirect(routes.home);
}

export const userDetail = (req, res) => res.render("userDetail", {pageTitle: "User Detail"});
export const editProfile = (req, res) => res.render("editProfile", {pageTitle: "Edit Profile"});
export const changePassword = (req, res) => res.render("changePassword", {pageTitle: "Change Password"});