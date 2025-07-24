'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  Engine,
  Render,
  World,
  Bodies,
  Mouse,
  MouseConstraint,
  Events,
  Composite,
} from 'matter-js';

const SkillBlock = ({ text, body }) => {
  const ref = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const update = () => {
      if (ref.current && body) {
        ref.current.style.transform = `translate(${body.position.x - 50}px, ${body.position.y - 25}px) rotate(${body.angle}rad)`;
      }
      animationFrameId = requestAnimationFrame(update);
    };
    update();

    return () => cancelAnimationFrame(animationFrameId);
  }, [body]);

  return (
    <div
      ref={ref}
      className="absolute px-4 py-2 bg-white text-black rounded shadow text-center font-semibold cursor-grab select-none"
      style={{ width: 100, height: 50 }}
    >
      {text}
    </div>
  );
};

export default function SkillsPhysics() {
  const containerRef = useRef(null);
  const [bodies, setBodies] = useState([]);
  const skills = ['React', 'Next.js', 'MySQL', 'HTML', 'CSS', 'JS', 'TS', 'Git', 'Github', 'Tailwind', 'Framer'];

  useEffect(() => {
    const engine = Engine.create();
    const world = engine.world;
    engine.gravity.y = 1.0; // realistic gravity

    let walls = [];
    const createWalls = () => {
      const bounds = containerRef.current.getBoundingClientRect();
      const width = bounds.width;
      const height = bounds.height;

      // Remove old walls if any
      if (walls.length) {
        Composite.remove(world, walls);
      }

      walls = [
        Bodies.rectangle(width / 2, -10, width, 20, { isStatic: true }), // ceiling
        Bodies.rectangle(width / 2, height + 10, width, 20, { isStatic: true }), // floor
        Bodies.rectangle(-10, height / 2, 20, height, { isStatic: true }), // left
        Bodies.rectangle(width + 10, height / 2, 20, height, { isStatic: true }), // right
      ];
      World.add(world, walls);
    };

    createWalls();

    const skillBodies = skills.map((skill, i) =>
      Bodies.rectangle(120 + (i % 5) * 110, 50 + Math.floor(i / 5) * 70, 100, 50, {
        restitution: 0.9,
        friction: 0.05,
        density: 0.002,
      })
    );

    World.add(world, skillBodies);
    setBodies(skillBodies);

    const mouse = Mouse.create(containerRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    World.add(world, mouseConstraint);

    const runner = () => {
      Engine.update(engine, 1000 / 60);
      animationFrameId = requestAnimationFrame(runner);
    };
    let animationFrameId = requestAnimationFrame(runner);

    const resizeHandler = () => {
      createWalls();
    };
    window.addEventListener('resize', resizeHandler);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeHandler);
      World.clear(world);
      Engine.clear(engine);
    };
  }, []);

  return (
  <>
    <section className="w-full px-4 py-8 flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold text-center mb-6 text-white">My Skills</h2>

      <div
        ref={containerRef}
        className="relative w-full max-w-4xl h-[400px] mx-auto border-2 border-gray-300 rounded-lg bg-white/20 backdrop-blur-md overflow-hidden"
      >
        {bodies.map((body, index) => (
          <SkillBlock key={skills[index]} text={skills[index]} body={body} />
        ))}
      </div>
    </section>
  </>
);

}
