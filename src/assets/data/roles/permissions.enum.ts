export enum Permissions {

    // 1. Typing
    TypingPlayGround = 1000,
    TypingCreateNewContent = 1001,
    TypingEditContent = 1002,
    TypingDeleteContent = 1003,
    TypingEvaluation = 1004,

    // 2. Email
    EmailPlayGround = 2000,
    EmailCreateNewContent = 2001,
    EmailEditContent = 2002,
    EmailDeleteContent = 2003,
    EmailEvaluation = 2004,

    // 3. Tasks
    TasksView = 3000,
    TasksCreate = 3001,
    TasksEdit = 3002,
    TasksDelete = 3003,
    TasksEvaluation = 3004,

    // 4. Courses
    CoursesView = 4000,
    CoursesCreate = 4001,
    CoursesEdit = 4002,
    CoursesDelete = 4003,
    CoursesEvaluation = 4004,

    // 5. Institute Management
    InstituteCreate = 5000,

    // 6. Users Management
    UserRolesCreate = 6000
}

// 1) Typing

//     a) Typing playground
//     b) Create new chaptor/lession
//     c) Edit content
//     d) Delete/Disable chapters or lessions

// 2) Email

//     a) Email Playground
//     b) Create new chaptor/lession
//     c) Edit content
//     d) Delete/Disable chapters or lessions

// 3) Tasks

//     a) View Tasks
//     b) Create Tasks
//     c) Edit task
//     d) Evaluate task
//     e) Delete task
//     f) Move task to next day

// 4) Content

//     a) View course content
//     b) Create course content
//     c) Edit course content
//     d) Delete/disable course conent
