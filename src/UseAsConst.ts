const role = {
    Admin: "ADMIN",
    Editor: "EdITOR",
    Guest: "GUEST"
} as const;

const chackRole = (Role: typeof role[keyof typeof role]) => {
    if (Role === role.Admin || Role === role.Editor) {
        return true;
    } else {
        return false
    }
};

console.log(chackRole(role.Guest))
