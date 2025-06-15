
import React from 'react';
import CulturePageLayout from './CulturePageLayout';
import { RECIPES_DATA } from '@/data/cuisine-data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const LocalCuisinePage = () => {
  const intro = (
    <>
      Savor the unique flavors of Ladakhi cuisine, a delightful blend of Tibetan and Indian influences. 
      From nourishing soups to savory breads, discover dishes shaped by the high-altitude environment.
    </>
  );

  return (
    <CulturePageLayout
      pageTitle="Local Cuisine"
      heroImage="https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=1920&h=1080&fit=crop&auto=format&q=80"
      introBlurb={intro}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold font-tinos text-crimson mb-4 text-center">Taste of Ladakh</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {RECIPES_DATA.map(recipe => (
            <div key={recipe.id} className="group relative transition-all duration-300 ease-in-out transform hover:-translate-y-1.5">
              <Card className="overflow-hidden h-full flex flex-col group-hover:shadow-xl transition-shadow duration-300 border group-hover:border-saffron">
                <div className="overflow-hidden aspect-video rounded-t-lg">
                  <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" loading="lazy" />
                </div>
                <CardContent className="p-4 flex-grow flex flex-col">
                  <h3 className="font-semibold text-xl text-jetblack">{recipe.name}</h3>
                  <p className="text-sm text-gray-700 my-2 flex-grow">{recipe.snippet}</p>
                  <a href="#" className="inline-block mt-4 text-sm font-semibold text-crimson hover:underline">
                    Full Recipe
                  </a>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 bg-dairycream p-8 rounded-lg flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold font-tinos text-crimson mb-2">Ladakh Food Festival</h2>
          <p className="text-jetblack mb-4">Experience the culinary diversity of Ladakh at our annual food festival. Join us for live cooking demos, food stalls, and cultural performances.</p>
          <p className="font-semibold text-jetblack mb-4">August 15-17, 2025</p>
          <Button className="bg-saffron text-white hover:bg-saffron/90">Book Your Seat</Button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80" alt="Food festival 1" className="rounded-lg w-full h-32 object-cover" />
          <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80" alt="Food festival 2" className="rounded-lg w-full h-32 object-cover" />
          <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80" alt="Food festival 3" className="rounded-lg w-full h-32 object-cover" />
          <div className="bg-saffron/20 rounded-lg w-full h-32 flex items-center justify-center text-crimson font-bold">+12 more</div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold font-tinos text-crimson mb-4 text-center">Find Local Eateries</h2>
        <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center text-center p-4">
            <div>
              <MapPin className="text-gray-400 mx-auto" size={64}/>
              <p className="text-gray-500 mt-2">Interactive map coming soon!</p>
            </div>
        </div>
      </section>

    </CulturePageLayout>
  );
};

export default LocalCuisinePage;
