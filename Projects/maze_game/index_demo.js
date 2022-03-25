const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } =
  Matter;

const width = 800;
const height = 600;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width,
    height,
  },
});

Render.run(render);
Runner.run(Runner.create(), engine);

World.add(
  world,
  MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas),
  })
);

// Walls
const walls = [
  Bodies.rectangle(400, 0, 800, 40, {
    isStatic: true,
  }),
  Bodies.rectangle(400, 600, 800, 40, {
    isStatic: true,
  }),
  Bodies.rectangle(0, 300, 40, 600, {
    isStatic: true,
  }),
  Bodies.rectangle(800, 300, 40, 600, {
    isStatic: true,
  }),
];
World.add(world, walls);

// Random Shapes

for (let i = 0; i < 50; i++) {
  const shapeWidth = Math.floor(Math.random() * width);
  const shapeHeight = Math.floor(Math.random() * height);

  let shape;
  if (Math.random() > 0.5) {
    shape = Bodies.rectangle(shapeWidth, shapeHeight, 50, 50);
  } else {
    shape = Bodies.circle(shapeWidth, shapeHeight, 35, {
      render: {
        fillStyle: "green",
      },
    });
  }

  World.add(world, shape);
}
