// src/controllers/feedController.js
const { json } = require('express');
const feedRepository = require('../repositories/feedRepository');

exports.getFeed = async (req, res) => {
    try {
        const feeds = await feedRepository.findAllFeeds();
        res.status(200).json(feeds);
    } catch (error) {
        res.status(500).json({ message: "An error occurred while fetching feeds", error: error.message });
    }
};

exports.getFeedById = async (req, res) => {
    const feedId = req.params.id;
    try {
        const feed = await feedRepository.findFeedById(feedId);
        if (feed) {
            res.status(200).json(feed);
        } else {
            res.status(404).json({ message: "Feed not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "An error occurred while fetching the feed", error: error.message });
    }
};

exports.createFeed = async (req, res) => {
    const { id, userId, executiveSummary, thumbnail, pitchDeck, amountRaised, endDate } = req.body;
    if (!userId || !executiveSummary || !thumbnail || !pitchDeck || !amountRaised || !endDate) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    const feedData = { id, userId, executiveSummary, thumbnail, pitchDeck, amountRaised, endDate };
    try {
        const newFeed = await feedRepository.createFeed(feedData);
        res.status(201).json(newFeed);
    } catch (error) {
        res.status(500).json({ message: "An error occurred while creating feed", error: error.message });
    }
};

exports.deleteFeed = async (req, res) => {
    const feedId = req.params.id;

    const feed = await feedRepository.findFeedById(feedId);
    if (feed) {
        feedRepository.deleteFeedById(feedId);
        res.status(200).json({ message: "Feed delete succesfully" });
    } else {
        res.status(404).json({ message: "Feed not found" });
    }
};