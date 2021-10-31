test = require("tape")
{ r } = require("renaissance")
Adapter = require("../../dist/Adapter")

test("Adapter can be instantiated", (t) =>
  t.ok(new Adapter())
  t.end()
)

# Your tests here

test("Adapter can be registered with renaissance", (t) =>
  t.ok(r.registerAdapter("appendHTML", Adapter))
  t.end()
)
