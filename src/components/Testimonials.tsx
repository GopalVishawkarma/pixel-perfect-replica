const Testimonials = () => {
  return (
    <section className="py-16 px-4 md:px-12 max-w-[1400px] mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-2">
        Trusted By Real Owners & Home Seekers
      </h2>
      <p className="text-sm text-muted-foreground text-center mb-10">
        From listing to deal closure, see how OwnersLane helped users connect safely and transparently.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-8">
            <div className="text-5xl text-primary mb-4 font-serif">"</div>
            <p className="text-sm text-muted-foreground">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
