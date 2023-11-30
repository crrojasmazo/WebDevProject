import React from "react";
import { Grid, Container } from "@mui/material";

import Convert from "../Components/Convert";

import imagen1 from "../Assets/Images/prueba1.png";
import grafica1 from "../Assets/Images/prueba11.png";
import imagen2 from "../Assets/Images/prueba2.png";
import grafica2 from "../Assets/Images/prueba21.png";

const MainIndex = () => (
  <Container maxWidth="xl" id="main_index" className="bg-light text-dark">
    <Grid
      container
      direction="column"
      alignContent="center"
      alignItems="center"
      paddingTop={10}
    >
      <Grid xs={12} item marginBottom={10}>
        <Convert />
      </Grid>
      <Grid item xs={1}>
        <Grid container>
          <Grid item xs={4}>
            <header>
            <h4>The unstable behaviour of Dollars and Euros</h4> 
            </header>
            <img style={{ height: "20%" }} src={imagen1} alt="Fluctuaciones del dolar respecto al euro" />
            <p>
            The continuous competition between dollars and Euros marks a big step in the stability of the global market being two of the most relevant currencies; it is shown that there is certain fluctuation in the exchange rate even when both economies work in a similar way and usually helps eachother.
            </p>
            <p>
            Those fluctuations are helped by the status of the world order where conflicts and natural disasters can have a big impact into the macro economies making small changes into the stability of local currencies and then evolving into a butterfly effect that affects other economic systems.
            </p>
            <header>
            <h5>A clever domination of bitcoin</h5> 
            </header>
            <img style={{ height: "15%" }} src={imagen2} alt="bitcoin" />
            <p>
            There is no doubt that bitcoin is the king of cryptocurrencies but its success is mainly due to being the pioneer of the large scale currencies inside the block chain. But it has proven that it is as unstable as other cryptocurrencies are with two recent downfalls due to external factors which is a worrying thing to their usual customers.
            </p>
          </Grid>
          <Grid item xs={4}>
            <header>
            <h1>What is the real value of a currency compared to other?</h1> 
            </header>
            <p>
            Is there really a way to determine if a currency is undervalued or overvalued in an objective way? It is a question that keeps getting asked in the global market due to a supposed advantage from certain countries in respect to other countries when there are trade disputes.
            </p>
            <p>
            The main problem lies into the speculative aspect of the big market where currencies can be extremely volatile and the introduction of cryptocurrencies into the equation made the situation even worse. For example in 1992, George Soros bet one billion dollars against the British pound under the speculation of the British currency being highly overvalued giving pressure to the banks making it crash at the end forcing United Kingdom to leave the European exchange rate mechanism which was the precursor of the euro.
            </p>
            <p>
            This feat has never been repeated after that in a consistent and convincing way with other currencies, mainly because there is not a real method to determine if a currency is properly valued or not. This is something to consider when an analysis of the market is being done since exchange rates can be heavily impacted by the way the countries manage their own markets avoiding inflation or deflation inside trade deals.
            </p>
            <header>
            <h2>What is the cost of anything?</h2> 
            </header>
            <p>
            People are used to the nominal exchange rate of some things in their daily life and sometimes they are familiar with certain currencies different to what they usually use in their daily basis. But that custom can make it difficult to have an objective view of what the price of something can actually be, so it is not a surprise that the price difference between the same product in different instances can be worrying, controversial or even confusing because that hole in the popular knowledge doesn’t let the normal citizen to realize if a price is real, fair or not.
            </p>
            <p>
            The same thing happens with currencies, the exchange rates may be different depending not only in the local currency and economy but also in the geographical location leaving holes inside the market itself allowing things like money laundering to happen easier. But this has also another consequence which in a large scale can be more devastating for a company or an individual, this is because jumping between currencies can lead to money loss if there is not enough care and this is due to the exchange rate changing over the reference.
            </p>
            <p>
            Thinking about how to make currencies more stable in a global market can be a difficult task, there are several mathematical models that try to emulate a pseudo stable global economy but with the differences there are today between government regimes it looks like an impossible task and that idea is feed up by how the market works because the seller wants to have earnings of the transaction and that’s something that applies to currencies as well.
            </p>
            <header>
            <h3>The market role with the cyptocurrencies</h3> 
            </header>
            <p>
            Cryptocurrencies have been a matter of controversy since their conception and that is because of the speculative nature of the currency itself making it extremely volatile and susceptible to failure due to small mistakes or market manipulation. This is something that has been happening from the beginning making them unreliable.
            </p>
            <p>
            A good example of this was how Elon Musk made bitcoin fall 12% only by saying that Tesla, his company, will not accept that currency as payment which is something that is expected not to happen with normal currencies. This is why the global market is scared of the idea of adding cryptocurrencies as another alternative currency.
            </p>
            <p>
            The way cryptocurrencies are becoming more and more popular with the time has shown possibilities and issues by proving how unreliable they are as a currency but also showing to the global market how their own currencies have an unstable value that can be altered as easy as crypto but in different situations. That leads to how the economic system has poor protections against market manipulation and in consequence poor protection against a currency fallout and that’s why it is possible to see entities like wall street group playing with small companies to make a profit at the cost of the external stability.
            </p>
          </Grid>
          <Grid item xs={4}>
            <img style={{ height: "70%" }} src={grafica1} alt="ad" />
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container>
);

export default MainIndex;
