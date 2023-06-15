import BlogPost from '../Components/BlogPost';
import { blogpost } from '../data/data';

export default function Blog () {


    return (
        <section className='col-12'>
            <article className="image-realisations"></article>

            <div className="d-flex flex-wrap flex-column flex-md-row flex-lg-row justify-content-center align-items-stretch gap-3 mt-5 mb-5 col-12 col-md-12 col-lg-12">
                {blogpost.map((post) => 
                    <BlogPost
                        key={post.id}
                        blogpost_title={post.title}
                        blogpost_description={post.description}
                        blogpost_image={post.image}
                        blogpost_published_date={post.published_date}
                    />
                )}
            </div>
        </section>
    )
}