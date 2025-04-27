export default function About() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">About KBrus</h2>
      <p>I'm a Musician, Engineer and Programmer (in that order) and out of boredom, curiosity and the crave of doing something remotely meaningful for me and anyone out there, i've created this place to post the projects I care about and hopefully wil help someone achieve something.</p>
      <br />
      <hr />
      <br />
      <p>If you need to report a bug or have an idea, please 
        <a href="mailto:kbruskbrus@gmail.com"
          className="relative group text-blue-600 ml-2">
          send me an Email
          <span className=" w-full absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs text-white bg-black p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Please do not send porn!
          </span>
        </a>
      </p>
    </section>
  )
}