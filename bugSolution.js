```javascript
//Correct aggregation pipeline
db.collection.aggregate([
  { $match: { "field": "value" } },
  { $project: {field: 1, _id: 0} },
  { $group: { _id: "$field", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 10 }
])
```