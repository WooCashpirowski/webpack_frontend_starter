class Sample {
  async getSample() {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=10"
    );
    const sample = await res.json();
    return sample;
  }
}

export default Sample;
