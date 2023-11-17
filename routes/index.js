module.exports = app => {
    const plantsRoutes = require("./plants.routes");
    app.use("/", plantsRoutes);

    const indexRoutes = require("./index.routes");
    app.use("/", indexRoutes);

    const authRoutes = require("./auth.routes")
    app.use("/", authRoutes)

    const userRoutes = require("./user.routes")
    app.use("/user", userRoutes)

    const eventRoutes = require("./event.routes")
    app.use("/event", eventRoutes)


    const mapRoutes = require("./maps.routes")
    app.use("/map", mapRoutes)


    const apiRoutes = require("./api.routes")
    app.use("/api", apiRoutes)
}
