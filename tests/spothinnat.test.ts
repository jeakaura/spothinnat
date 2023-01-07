import { SpotData } from '../src/types';
import findCheapest from '../src/utils/findCheapest'
import findHighest from "../src/utils/findHighest";
import {describe, expect, test} from '@jest/globals';

interface CheapProps {
    data: SpotData[];
}[]

interface HighProps {
    data: SpotData[];
}[]

const manyData = [
    {
        "timestamp": "2022-12-24T22:00:00Z",
        "price": 20,
        "deliveryArea": "FI",
        "unit": "EUR/MWh"
    },
    {
        "timestamp": "2022-12-24T23:00:00Z",
        "price": 10,
        "deliveryArea": "FI",
        "unit": "EUR/MWh"
    },
    {
        "timestamp": "2022-12-25T00:00:00Z",
        "price": 40,
        "deliveryArea": "FI",
        "unit": "EUR/MWh"
    },
    {
        "timestamp": "2022-12-25T01:00:00Z",
        "price": 30,
        "deliveryArea": "FI",
        "unit": "EUR/MWh"
    },
]

const priceAsc = [
    {
        "timestamp": "2022-12-24T22:00:00Z",
        "price": 10,
        "deliveryArea": "FI",
        "unit": "EUR/MWh"
    },
    {
        "timestamp": "2022-12-24T23:00:00Z",
        "price": 20,
        "deliveryArea": "FI",
        "unit": "EUR/MWh"
    },
    {
        "timestamp": "2022-12-25T00:00:00Z",
        "price": 30,
        "deliveryArea": "FI",
        "unit": "EUR/MWh"
    },
]

const priceDesc = [
    {
        "timestamp": "2022-12-24T22:00:00Z",
        "price": 30,
        "deliveryArea": "FI",
        "unit": "EUR/MWh"
    },
    {
        "timestamp": "2022-12-24T23:00:00Z",
        "price": 20,
        "deliveryArea": "FI",
        "unit": "EUR/MWh"
    },
    {
        "timestamp": "2022-12-25T00:00:00Z",
        "price": 10,
        "deliveryArea": "FI",
        "unit": "EUR/MWh"
    },
]

describe('testing cheapest', () => {
    test('halvin löytyy useamman alkion listasta', () => {
        const fakeProps: CheapProps = { data: manyData }
        const result = findCheapest(fakeProps)
        expect(result).toStrictEqual([ 10, '2022-12-24T23:00:00Z' ])
    });
    test('halvin löytyy vaikka se ekana olisi', () => {
        const fakeProps: CheapProps = { data: priceAsc }
        const result = findCheapest(fakeProps)
        expect(result).toStrictEqual([ 10, '2022-12-24T22:00:00Z' ])
    })
    test('halvin löytyy myös viimeisenä', () => {
        const fakeProps: CheapProps = { data: priceDesc }
        const result = findCheapest(fakeProps)
        expect(result).toStrictEqual([ 10, '2022-12-25T00:00:00Z' ])
    })
})

describe('testing highest', () => {
    test('kallein löytyy useamman alkion listasta', () => {
        const fakeProps: HighProps = { data: manyData }
        const result = findHighest(fakeProps)
        expect(result).toStrictEqual([ 40, '2022-12-25T00:00:00Z' ])
    });
    test('kallein löytyy vaikka se viimeisenä olisi', () => {
        const fakeProps: HighProps = { data: priceAsc }
        const result = findHighest(fakeProps)
        expect(result).toStrictEqual([ 30, '2022-12-25T00:00:00Z' ])
    })
    test('kallein löytyy ensimmäisestä', () => {
        const fakeProps: HighProps = { data: priceDesc }
        const result = findHighest(fakeProps)
        expect(result).toStrictEqual([ 30, '2022-12-24T22:00:00Z' ])
    })
})