module.exports = app => {
    const plantsRoutes = require("./api.plants.routes");
    app.use("/", plantsRoutes);

    const indexRoutes = require("./index.routes");
    app.use("/", indexRoutes);

    const authRoutes = require("./auth.routes")
    app.use("/", authRoutes)

    const userRoutes = require("./user.routes")
    app.use("/user", userRoutes)

    const eventRoutes = require("./event.routes")
    app.use("/event", eventRoutes)

}